export const Field = ({ label, name }: { label: string; name: string }) => (
  <div className="col-span-1 mt-5">
    <label htmlFor="name" className="uppercase text-sm">
      {label}
    </label>
    <input
      className="border-1 border-gray-400 rounded-sm p-2 w-full"
      type="text"
      id={name}
      name={name}
    />
  </div>
);
