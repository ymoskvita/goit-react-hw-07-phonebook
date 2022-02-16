import { Toaster } from 'react-hot-toast';
import Section from "./Section/Section";
import ContactsList from "./ContactsList/ContactsList";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";

export default function App() {
  return (
    <>
      <Toaster />
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
}
