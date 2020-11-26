import Form from "@/components/form/Form";

export default function Contact() {
  
  return (
    <section className="py-16">
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
