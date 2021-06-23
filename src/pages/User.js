import React from "react";
import {
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
export default function User() {
  const { first, last } = useParams();
  const routeMatch = useRouteMatch("/user/avi/cohen");
  const history = useHistory();

  console.log(history);
  console.log(routeMatch);

  return (
    <div>
      User page : {first}, {last}
      <div>
        {routeMatch ?
        <button onClick={() => alert("welcome Admin")}>Admin</button> : null}
        
        {routeMatch && (
          <button onClick={() => alert("welcome Admin")}>Admin</button>
        )}
      </div>
      <button onClick={() => history.replace("/")}>go home (replace)</button>
      <button onClick={() => history.push("/")}>go Home (push)</button>
    </div>
  );
}
