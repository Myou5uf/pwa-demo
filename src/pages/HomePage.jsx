import React, {useEffect, useState} from 'react';
import {Alert, Table} from 'react-bootstrap';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState('online');

  useEffect(() => {
    const getData = async () => {
      const url = 'https://jsonplaceholder.typicode.com/users';
      try {
        const response = await fetch(url)
        const json = await response?.json()
        setData(json);
        localStorage.setItem('users', JSON.stringify(json))
      } catch (e) {
        setMode('offline');
        const dataFromCache = localStorage.getItem('users');
        setData(JSON.parse(dataFromCache));
      }
    }

    getData();
  }, []);

  return (
    <div>
      <h1 className="my-5">Home page</h1>
      <div>
        {mode === 'offline' &&
          <Alert variant="warning">
            you are in offline mode
          </Alert>
        }
      </div>
      <Table striped bordered hover hidden>
        <thead>
        <tr>
          <th>Username</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {data.map(({id, name, username, email}) =>
          <tr key={id}>
            <td>{username}</td>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        )}
        </tbody>
      </Table>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aperiam architecto culpa cumque cupiditate
        debitis deleniti distinctio dolor ea et expedita explicabo facere fuga libero maxime neque nesciunt nisi nobis
        numquam, quos reiciendis repellendus sapiente sed sequi sint temporibus voluptatibus. Accusamus accusantium
        aperiam aspernatur deleniti dignissimos, eveniet fugit, hic nesciunt nostrum perspiciatis, sequi unde. Adipisci
        quo, vel? Accusamus, adipisci alias fuga id nostrum officia perferendis praesentium tenetur voluptate. Ad
        aliquam aliquid, culpa dolor et expedita magni, maiores minus numquam obcaecati optio quaerat repellat sunt.
        Deleniti eveniet, excepturi incidunt ipsam minus nesciunt nulla placeat provident qui, ratione rem sed tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aperiam architecto culpa cumque cupiditate
        debitis deleniti distinctio dolor ea et expedita explicabo facere fuga libero maxime neque nesciunt nisi nobis
        numquam, quos reiciendis repellendus sapiente sed sequi sint temporibus voluptatibus. Accusamus accusantium
        aperiam aspernatur deleniti dignissimos, eveniet fugit, hic nesciunt nostrum perspiciatis, sequi unde. Adipisci
        quo, vel? Accusamus, adipisci alias fuga id nostrum officia perferendis praesentium tenetur voluptate. Ad
        aliquam aliquid, culpa dolor et expedita magni, maiores minus numquam obcaecati optio quaerat repellat sunt.
        Deleniti eveniet, excepturi incidunt ipsam minus nesciunt nulla placeat provident qui, ratione rem sed tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aperiam architecto culpa cumque cupiditate
        debitis deleniti distinctio dolor ea et expedita explicabo facere fuga libero maxime neque nesciunt nisi nobis
        numquam, quos reiciendis repellendus sapiente sed sequi sint temporibus voluptatibus. Accusamus accusantium
        aperiam aspernatur deleniti dignissimos, eveniet fugit, hic nesciunt nostrum perspiciatis, sequi unde. Adipisci
        quo, vel? Accusamus, adipisci alias fuga id nostrum officia perferendis praesentium tenetur voluptate. Ad
        aliquam aliquid, culpa dolor et expedita magni, maiores minus numquam obcaecati optio quaerat repellat sunt.
        Deleniti eveniet, excepturi incidunt ipsam minus nesciunt nulla placeat provident qui, ratione rem sed tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aperiam architecto culpa cumque cupiditate
        debitis deleniti distinctio dolor ea et expedita explicabo facere fuga libero maxime neque nesciunt nisi nobis
        numquam, quos reiciendis repellendus sapiente sed sequi sint temporibus voluptatibus. Accusamus accusantium
        aperiam aspernatur deleniti dignissimos, eveniet fugit, hic nesciunt nostrum perspiciatis, sequi unde. Adipisci
        quo, vel? Accusamus, adipisci alias fuga id nostrum officia perferendis praesentium tenetur voluptate. Ad
        aliquam aliquid, culpa dolor et expedita magni, maiores minus numquam obcaecati optio quaerat repellat sunt.
        Deleniti eveniet, excepturi incidunt ipsam minus nesciunt nulla placeat provident qui, ratione rem sed tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aperiam architecto culpa cumque cupiditate
        debitis deleniti distinctio dolor ea et expedita explicabo facere fuga libero maxime neque nesciunt nisi nobis
        numquam, quos reiciendis repellendus sapiente sed sequi sint temporibus voluptatibus. Accusamus accusantium
        aperiam aspernatur deleniti dignissimos, eveniet fugit, hic nesciunt nostrum perspiciatis, sequi unde. Adipisci
        quo, vel? Accusamus, adipisci alias fuga id nostrum officia perferendis praesentium tenetur voluptate. Ad
        aliquam aliquid, culpa dolor et expedita magni, maiores minus numquam obcaecati optio quaerat repellat sunt.
        Deleniti eveniet, excepturi incidunt ipsam minus nesciunt nulla placeat provident qui, ratione rem sed tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aperiam architecto culpa cumque cupiditate
        debitis deleniti distinctio dolor ea et expedita explicabo facere fuga libero maxime neque nesciunt nisi nobis
        numquam, quos reiciendis repellendus sapiente sed sequi sint temporibus voluptatibus. Accusamus accusantium
        aperiam aspernatur deleniti dignissimos, eveniet fugit, hic nesciunt nostrum perspiciatis, sequi unde. Adipisci
        quo, vel? Accusamus, adipisci alias fuga id nostrum officia perferendis praesentium tenetur voluptate. Ad
        aliquam aliquid, culpa dolor et expedita magni, maiores minus numquam obcaecati optio quaerat repellat sunt.
        Deleniti eveniet, excepturi incidunt ipsam minus nesciunt nulla placeat provident qui, ratione rem sed tenetur?
      </p>
    </div>
  );
};

export default HomePage;
