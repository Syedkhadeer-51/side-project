
function Customers() {
  const greeting = 'Customers';
  const people = [
    {
      name: 'Said Al Ruzaiqi',
      email: 'said.alruzaiqi@example.com',
      role: 'House Buyer',
      propertyType: 'Residential',
      investmentAmount: 500000,
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Zahra Al Siyabi',
      email: 'zahra.alsiyabi@example.com',
      role: 'Land Buyer',
      propertyType: 'Commercial',
      investmentAmount: 1000000,
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
    {
      name: 'Khalid Al Barwani',
      email: 'khalid.albarwani@example.com',
      role: 'House Renter',
      propertyType: 'Residential',
      investmentAmount: 2000,
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
    {
      name: 'Aisha Al Ghaithi',
      email: 'aisha.alghaithi@example.com',
      role: 'Lease Holder',
      propertyType: 'Office',
      investmentAmount: 10000,
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Hamad Al Kharusi',
      email: 'hamad.alkharusi@example.com',
      role: 'Project Investor',
      propertyType: 'Mixed-Use',
      investmentAmount: 750000,
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Mariam Al Badi',
      email: 'mariam.albadi@example.com',
      role: 'Office Space Renter',
      propertyType: 'Commercial',
      investmentAmount: 5000,
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
]


  return(
    <div>
    <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl">{greeting}</h1>
    <ul role="list" className="divide-y divide-zinc-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-zinc-50" src={person.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-zinc-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-zinc-500">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-zinc-900">{person.role}</p>
            <p className="text-sm leading-6 text-zinc-900">{person.propertyType}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-zinc-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-zinc-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default Customers;