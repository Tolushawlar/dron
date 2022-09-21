import "./Testimonial.css";

export default function Testimonial() {
  const posts = [
    {
      title: "A Quick Guide to WordPress Hosting",
      desc: "According to him, “I'm still surprised that this has happened. But we are surprised because we are so surprised.”More revelations about Whittington will be featured in the film",
      img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
      authorName: "Micheal",
      date: "Jan 4 2022",
    },
    {
      title: "7 Promising VS Code Extensions Introduced in 2022",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
      authorName: "Luis",
      date: "Jan 4 2022",
    },
    {
      title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
      desc: "The powerful gravity waves resulting from the impact of the planets' moons — four in total — were finally resolved in 2015 when gravitational microlensing was used to observe the",
      img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
      authorName: "Lourin",
      date: "Jan 4 2022",
    },
  ];

  return (
    <section className="cards-primary">
      <div className="cards-header">
        <h1>Client Says About Us</h1>
        <p>
          This are the things that our clients who have used TMb have to say
        </p>
      </div>
      <div className="card-container">
        {posts.map((items, key) => (
          <article className="card" key={key}>
            <div className="card-details">
              <div className="card-header">
                <div className="avatar">
                  <img src={items.authorLogo} alt={items.authorName} />
                </div>
                <div className="info">
                  <span className="author-name">{items.authorName}</span>
                </div>
              </div>
              <div className="card-footer">
                <p>{items.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
