import {
    Outlet,
    Link,
    useLoaderData,Form
  } from "react-router-dom";
  import { getContacts ,createContact} from "../contacts";
  
  /* other code */
  export async function action() {
    const contact = await createContact();
    return { contact };
  }
  
  export async function loader() {
    const contacts = await getContacts();
    return { contacts };
  }
  export default function Root() {
    const { contacts } = useLoaderData();
    //useLoaderData();
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          {/* other code */}
  
          <nav>
            {contacts.length ? (
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <Link to={`contacts/${contact.id}`}>
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {contact.favorite && <span>★</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No contacts</i>
              </p>
            )}
          </nav>
  
          {/* other code */}
        </div>
      </>
    );
  }