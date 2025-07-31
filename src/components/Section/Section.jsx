function Section({ description, children }) {
  return (
    <section className="container">
      <h2 >
        ------{description}-------
      </h2>
      {children}
    </section>
  );
}

export default Section;
