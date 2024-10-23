//imports the useRouteError hook from the react-router-DOM library
import { useRouteError } from 'react-router-dom';

//function is used to display an error message when navigating the different pages via the react router
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
