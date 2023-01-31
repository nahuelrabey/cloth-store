import styles from "./Newsletter.module.css";

export function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <div>
        <h3>RECIBÍ TODAS LAS OFERTAS MAYORISTAS</h3>
        <p>registrate ya mismo y empezá a ganar más!</p>
        <form>
          <input type="text" name="email" id="email" placeholder="email"/>
        </form>
        <button>ENVIAR</button>
      </div>
    </section>
  );
}
