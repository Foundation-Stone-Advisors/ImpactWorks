"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Youtube from "@tiptap/extension-youtube";
import { useCallback, useState } from "react";

interface TiptapEditorProps {
  content: string;
  onChange: (html: string) => void;
}

type Mode = "visual" | "html";

const toolbarBtn = (active: boolean) =>
  `px-2.5 py-1.5 text-sm rounded-lg font-medium transition-colors disabled:opacity-30 ${
    active
      ? "bg-brand-orange text-white"
      : "text-slate-600 hover:bg-slate-200 hover:text-slate-800"
  }`;

/**
 * Tiptap keeps only what its schema knows about, so a post holding a photo
 * gallery or captioned figures would come back out of the visual editor with
 * that markup silently removed. Any post written in the HTML view therefore
 * opens in the HTML view, and has to be switched over deliberately.
 */
const RICH_MARKUP = /<figure|class="photo-grid"|<table|<iframe(?![^>]*youtube)/i;

export default function TiptapEditor({ content, onChange }: TiptapEditorProps) {
  const [mode, setMode] = useState<Mode>(() =>
    RICH_MARKUP.test(content) ? "html" : "visual"
  );
  const [html, setHtml] = useState(content);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false, HTMLAttributes: { class: "text-brand-orange underline" } }),
      Image.configure({ HTMLAttributes: { loading: "lazy" } }),
      Placeholder.configure({ placeholder: "Write your post content here…" }),
      Youtube.configure({ width: 640, height: 360, nocookie: true }),
    ],
    content,
    onUpdate: ({ editor }) => {
      const next = editor.getHTML();
      setHtml(next);
      onChange(next);
    },
    editorProps: {
      attributes: { class: "min-h-[300px] p-5 focus:outline-none prose-content" },
    },
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    const previous = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Enter URL", previous ?? "https://");
    if (url === null) return;
    if (url === "") { editor.chain().focus().extendMarkRange("link").unsetLink().run(); return; }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const embedYoutube = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("Paste a YouTube URL (e.g. https://youtube.com/watch?v=...)");
    if (!url) return;
    editor.chain().focus().setYoutubeVideo({ src: url }).run();
  }, [editor]);

  const insertImage = useCallback(() => {
    if (!editor) return;
    const src = window.prompt(
      "Image URL — upload the file to public/images/ first, then use its path (e.g. /images/alice/alice-breakfast.jpg)"
    );
    if (!src) return;
    const alt = window.prompt("Describe the photo for screen readers and search engines") ?? "";
    editor.chain().focus().setImage({ src, alt }).run();
  }, [editor]);

  const toggleMode = useCallback(() => {
    if (!editor) return;
    if (mode === "visual") {
      setHtml(editor.getHTML());
      setMode("html");
      return;
    }
    // Back to the visual editor: anything outside Tiptap's schema is dropped
    // here, not silently on save, so the warning has to come before the switch.
    if (
      RICH_MARKUP.test(html) &&
      !window.confirm(
        "The visual editor cannot hold galleries, captions or tables. Switching now removes them from this post. Continue?"
      )
    ) {
      return;
    }
    editor.commands.setContent(html, { emitUpdate: false });
    onChange(editor.getHTML());
    setHtml(editor.getHTML());
    setMode("visual");
  }, [editor, html, mode, onChange]);

  if (!editor) return null;

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-200 bg-slate-50">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} disabled={mode === "html"} className={toolbarBtn(editor.isActive("bold"))}>
          <strong>B</strong>
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} disabled={mode === "html"} className={toolbarBtn(editor.isActive("italic"))}>
          <em>I</em>
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} disabled={mode === "html"} className={toolbarBtn(editor.isActive("strike"))}>
          <s>S</s>
        </button>
        <div className="w-px h-5 bg-slate-300 mx-0.5" />
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} disabled={mode === "html"} className={toolbarBtn(editor.isActive("heading", { level: 2 }))}>
          H2
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} disabled={mode === "html"} className={toolbarBtn(editor.isActive("heading", { level: 3 }))}>
          H3
        </button>
        <div className="w-px h-5 bg-slate-300 mx-0.5" />
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} disabled={mode === "html"} className={toolbarBtn(editor.isActive("bulletList"))}>
          • List
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} disabled={mode === "html"} className={toolbarBtn(editor.isActive("orderedList"))}>
          1. List
        </button>
        <div className="w-px h-5 bg-slate-300 mx-0.5" />
        <button type="button" onClick={setLink} disabled={mode === "html"} className={toolbarBtn(editor.isActive("link"))}>
          Link
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} disabled={mode === "html"} className={toolbarBtn(editor.isActive("blockquote"))}>
          ❝ Quote
        </button>
        <button type="button" onClick={insertImage} disabled={mode === "html"} className={toolbarBtn(false)}>
          🖼 Photo
        </button>
        <button type="button" onClick={embedYoutube} disabled={mode === "html"} className={toolbarBtn(false)}>
          ▶ YouTube
        </button>
        <div className="w-px h-5 bg-slate-300 mx-0.5 ml-auto" />
        <button type="button" onClick={toggleMode} className={toolbarBtn(mode === "html")}>
          {"</>"} HTML
        </button>
        <button type="button" onClick={() => editor.chain().focus().undo().run()} disabled={mode === "html" || !editor.can().undo()} className="px-2.5 py-1.5 text-sm rounded-lg text-slate-500 hover:bg-slate-200 disabled:opacity-30 transition-colors">
          ↩
        </button>
        <button type="button" onClick={() => editor.chain().focus().redo().run()} disabled={mode === "html" || !editor.can().redo()} className="px-2.5 py-1.5 text-sm rounded-lg text-slate-500 hover:bg-slate-200 disabled:opacity-30 transition-colors">
          ↪
        </button>
      </div>

      {mode === "html" ? (
        <div>
          <p className="px-5 pt-4 text-xs text-slate-500">
            Editing the post as raw HTML. Photos, captions and galleries are kept exactly as
            written; switching back to the visual editor removes anything it cannot represent.
          </p>
          <textarea
            value={html}
            onChange={(e) => { setHtml(e.target.value); onChange(e.target.value); }}
            spellCheck={false}
            className="w-full min-h-[480px] p-5 font-mono text-xs leading-relaxed text-slate-700 focus:outline-none resize-y"
          />
        </div>
      ) : (
        <EditorContent editor={editor} />
      )}
    </div>
  );
}
