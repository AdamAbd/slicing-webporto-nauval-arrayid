import React from "react";
import Button from "../Button";
import ContactItem from "../ContactItem";
import Field from "../Field";
import SectionTittle from "../SectionTittle";

export default function ContactSection() {
  return (
    <section className="container mx-auto px-10 2xl:px-0" id="contact">
      <div className="bg-abu flex rounded-lg">
        <div className="w-6/12 border-r border-abu-200">
          <div className="md:p-14 lg:py-16 lg:px-20">
            <SectionTittle
              left
              tittle="Contact"
              subTittle="Beberapa cara menghubungi saya."
            />
            <div className="mt-10 flex flex-col gap-6">
              <ContactItem label="Mail" value="hi@nauv.al" icon="/mail.svg" />
              <ContactItem
                label="Phone"
                value="081234567890"
                icon="/phone.svg"
              />
              <ContactItem
                label="Twitter"
                value="@mhdnauvalazhar"
                icon="/twitter.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <form action="" className="md:p-14 lg:py-16 lg:px-20">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-6/12 px-4">
                <Field label="Name" name="name" type="text" />
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <Field label="Email" name="email" type="text" />
              </div>
            </div>
            <Field label="Subject" name="subject" type="text" />
            <Field
              label="Message"
              name="message"
              type="textarea"
              className="h-40"
            />
            <div className="text-right">
              <Button variant="black">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
