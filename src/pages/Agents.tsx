import { StarIcon } from "@heroicons/react/24/solid";

function Agents() {
  const greeting = "Agents";
  const agents = [
    {
      name: "Abdullah Al Harthy",
      email: "abdullah.alharthy@example.com",
      speciality: "Residential Properties",
      projectsCompleted: 50,
      rating: 4.5,
      areaOfFocus: "Muscat",
      yearsOfExperience: 10,
      languages: ["Arabic", "English"],
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Fatima Al Balushi",
      email: "fatima.albalushi@example.com",
      speciality: "Commercial Properties",
      projectsCompleted: 70,
      rating: 4.7,
      areaOfFocus: "Salalah",
      yearsOfExperience: 15,
      languages: ["Arabic", "English", "French"],
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Yusuf Al Saidi",
      email: "yusuf.alsaidi@example.com",
      speciality: "Land Acquisition",
      projectsCompleted: 30,
      rating: 4.3,
      areaOfFocus: "Nizwa",
      yearsOfExperience: 8,
      languages: ["Arabic", "English"],
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Noor Al Habsi",
      email: "noor.alhabsi@example.com",
      speciality: "Office Spaces",
      projectsCompleted: 45,
      rating: 4.6,
      areaOfFocus: "Sohar",
      yearsOfExperience: 12,
      languages: ["Arabic", "English", "German"],
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Ahmed Al Busaidi",
      email: "ahmed.albusaidi@example.com",
      speciality: "Mixed-Use Properties",
      projectsCompleted: 60,
      rating: 4.8,
      areaOfFocus: "Sur",
      yearsOfExperience: 14,
      languages: ["Arabic", "English", "Spanish"],
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div>
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl">
        {greeting}
      </h1>
      <ul role="list" className="divide-y divide-zinc-100">
        {agents.map((person, index) => (
          <li key={index} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-zinc-50"
                src={person.imageUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-zinc-900">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-zinc-500">
                  {person.email}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-zinc-500">
                  {person.languages.map((language) => (
                    <span className="pr-2">{language}</span>
                  ))}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-zinc-500">
                  {person.rating}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-zinc-500 flex">
                  {[...Array(Math.round(person.rating))].map((_star, i) => {
                    const ratingValue = i + 1;
                    return (
                      <label key={i}>
                        <StarIcon
                          className="star h-2 w-2"
                          color={
                            ratingValue <= person.rating ? "#ffc107" : "#e4e5e9"
                          }
                        />
                      </label>
                    );
                  })}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm font-bold leading-6 text-zinc-900">
                {person.speciality}
              </p>
              <p className="text-sm font-bold leading-6 text-zinc-900">
                {person.areaOfFocus}
              </p>
              <p className="text-sm leading-6 text-zinc-900">
                {" "}
                {person.yearsOfExperience} years experience
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Agents;
