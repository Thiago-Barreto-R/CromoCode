import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div>
      <div><h3>Error code</h3> 404</div>
      <Link to={'/'}>Voltar para home</Link>
    </div>
  )
}
