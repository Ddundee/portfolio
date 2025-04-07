import ContactForm from "@/components/contact-form";
import PageLayout from "../_components/page-layout";

export default async function Home() {
    // await new Promise((resolve) => setTimeout(resolve, 1000))

    return (
        <PageLayout>
            <div>
                <h1 className="text-stone-100 text-xl font-bold mb-1 min-h-7 w-full">
                    {/* <ScrambleText minors="contact me" /> */}
                    contact me
                </h1>
                <p className="text-stone-400">get in touch!</p>
            </div>
            <ContactForm />
        </PageLayout>
    );
}