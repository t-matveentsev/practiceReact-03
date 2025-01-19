import Profile from "../Profile/Profile";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{
          imageId: "szV5sdG",
          name: "Maria Skłodowska-Curie",
          profession: "physicist and chemist",
          discovery: "polonium (chemical element)",
          awards: [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry",
            "Davy Medal",
            "Matteucci Medal",
          ],
        }}
      />
      <Profile
        person={{
          imageId: "YfeOqp2",
          name: "Katsuko Saruhashi",
          profession: "geochemist",
          discovery: "a method for measuring carbon dioxide in seawater",
          awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
        }}
      />
    </div>
  );
}
