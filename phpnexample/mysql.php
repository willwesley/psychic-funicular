<html>
  <body>
  <h1>MySQL Example</h1>

  <?php
    $servername = "mysql";
    $username = "root";
    $password = "my-secret-pw";
    $dbname = "db34";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    // no bad! don't be do this!
    $sql = "SELECT name, email, password FROM users WHERE name LIKE '%" . $_REQUEST["q"] . "%'";

    // mmm, parameterized queries. yum.
    $q = "%" . $_REQUEST["q"] . "%";
    $sql = "SELECT name, email, password FROM users WHERE name LIKE ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $q);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
      ?><table><tr><th>Name</th><th>email</th><th>password</th></tr><?php
      while($row = $result->fetch_assoc()) {
        ?><tr>
          <td><?= $row["name"] ?></td>
          <td><?= $row["email"] ?></td>
          <td><?= $row["password"] ?></td>
          </tr><?php
      }
    } else {
      echo "0 results";
    }
    $conn->close();
  ?>
  </body>
</html>
