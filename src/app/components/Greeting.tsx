const Styles = {
  container: `
    pt-6
    px-8
    sm:pl-12
    text-4xl
    sm:text-5xl
    tracking-wide
    gap-6
    flex
    flex-col
    items-center
  `,
  title: `

  `,
  text: `
    text-lg
    sm:text-3xl
  `
}

const Greeting = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>La industria automotriz de Colombia desde otra perspectiva.</h2>
      <p className={Styles.text}>Dandole vida a los carros mediante un tributo hecho con calidad y pasion.</p>
    </div>
  )
}

export default Greeting;
