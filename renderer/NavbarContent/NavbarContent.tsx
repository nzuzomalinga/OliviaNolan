import { Link } from "../Link";

export default function NavbarContent() {
  return (
    <div className="navbar-content">
      <div className="menu">
        <Link href="/" children={"Home"} />
        <Link href="/lets-work-together" children={"Let Work Together"} />
        <Link href="/gallery" children={"Gallery"} />
      </div>

      <h1>OLIVIA NOLAN</h1>
    </div>
  )
}
