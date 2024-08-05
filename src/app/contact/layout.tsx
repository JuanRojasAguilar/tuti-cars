import NavPrincipal from "../components/NavPrincipal";

const ContactLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="h-full">
      { children }
    </main>
  )
}

export default ContactLayout;

