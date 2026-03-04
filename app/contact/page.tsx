export default function Contact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-dark-text mb-6">Contact</h1>
        <p className="text-gray-600 text-lg mb-10">
          Ready to build something that lasts? Reach out and let&apos;s start a
          conversation.
        </p>
        <div className="bg-gray-50 rounded-lg p-8 max-w-md">
          <p className="text-dark-text font-semibold">Email</p>
          <p className="text-gray-600 mb-4">hello@impactworks.dev</p>
          <p className="text-dark-text font-semibold">Location</p>
          <p className="text-gray-600">Available remotely, nationwide.</p>
        </div>
      </div>
    </section>
  );
}
