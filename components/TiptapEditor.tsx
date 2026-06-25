"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { useCallback } from "react";

interface TiptapEditorProps {
  content: string;
  onChange: (html: string) => void;
}

const toolbarBtn = (active: boolean) =>
  `px-2.5 py-1.5 text-sm rounded-lg font-medium transition-colors ${
    active
      ? "bg-brand-orange text-white"
      : "text-slate-600 hover:bg-slate-200 hover:text-slate-800"
  }`;

export default function TiptapEditor({ content, onChange }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false, HTMLAttributes: { class: "text-brand-orange underline" } }),
      Placeholder.configure({ placeholder: "Write your post content here…" }),
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
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

  if (!editor) return null;

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-200 bg-slate-50">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={toolbarBtn(editor.isActive("bold"))}>
          <strong>B</strong>
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={toolbarBtn(editor.isActive("italic"))}>
          <em>I</em>
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} className={toolbarBtn(editor.isActive("strike"))}>
          <s>S</s>
        </button>
        <div className="w-px h-5 bg-slate-300 mx-0.5" />
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={toolbarBtn(editor.isActive("heading", { level: 2 }))}>
          H2
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={toolbarBtn(editor.isActive("heading", { level: 3 }))}>
          H3
        </button>
        <div className="w-px h-5 bg-slate-300 mx-0.5" />
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={toolbarBtn(editor.isActive("bulletList"))}>
          • List
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={toolbarBtn(editor.isActive("orderedList"))}>
          1. List
        </button>
        <div className="w-px h-5 bg-slate-300 mx-0.5" />
        <button type="button" onClick={setLink} className={toolbarBtn(editor.isActive("link"))}>
          Link
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={toolbarBtn(editor.isActive("blockquote"))}>
          ❝ Quote
        </button>
        <div className="w-px h-5 bg-slate-300 mx-0.5 ml-auto" />
        <button type="button" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} className="px-2.5 py-1.5 text-sm rounded-lg text-slate-500 hover:bg-slate-200 disabled:opacity-30 transition-colors">
          ↩
        </button>
        <button type="button" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} className="px-2.5 py-1.5 text-sm rounded-lg text-slate-500 hover:bg-slate-200 disabled:opacity-30 transition-colors">
          ↪
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
