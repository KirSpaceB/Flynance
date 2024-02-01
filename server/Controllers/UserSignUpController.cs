using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using BCrypt.Net;


namespace server.Controllers;

[ApiController]
[Route("[controller]")]
public class UserSignUpController : ControllerBase
{
  private readonly IConfiguration _configuration;
  public UserSignUpController(IConfiguration configuration)
  {
    _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
  }
  [HttpPost]
  public IActionResult Post([FromBody] UserData userData)
  {
    try
    {
      using (MySqlConnection conn = new MySqlConnection(_configuration.GetConnectionString("FlynanceDatabaseConnection")))
      {
        conn.Open();
        string query = "INSERT INTO Users (username, useremail, userpassword) VALUES (@username, @email, @password)";

        using (MySqlCommand cmd = new MySqlCommand(query,conn))
        {
          //hash password before storing
          string hashedPassword = HashPassword(userData.UserPassword);

          cmd.Parameters.AddWithValue("@username", userData.UserName);
          cmd.Parameters.AddWithValue("@email", userData.UserEmail);
          cmd.Parameters.AddWithValue("@password", userData.UserPassword);

          cmd.ExecuteNonQuery();
        }
      }

      return Ok("User registered successfully");
    }
    catch (Exception e)
    {
      Console.WriteLine(e);
      throw;
      return BadRequest("Error: " + e.Message);
    }
  }

  private string HashPassword(string password)
  {
    return BCrypt.Net.BCrypt.HashPassword(password);
  }
}
public class UserData
{
  public string UserName {get; set;}
  public string UserEmail {get; set;}
  public string UserPassword {get; set;}
}