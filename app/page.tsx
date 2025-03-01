import Contact from "@/components/Contact";
const contacts = [
  {
    name: "AK",
    phone: 9024858847,
  },
  {
    name: "CK",
    phone: 8083232323,
  },
  {
    name: "dk",
    phone: 9090909090,
  },
];
export default function Home() {
  return (
    <div className="w-[400px] mx-auto pt-5">
      <div>
       <button onClick={}>Create New Contact</button>
      </div>
      {contacts.map((el, index) => (
        <div key={index} className="p-1">
          <Contact name={el.name} phone={el.phone} />
        </div>
      ))}
    </div>
  );
}
