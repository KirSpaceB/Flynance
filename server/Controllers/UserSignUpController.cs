using Microsoft.AspNetCore.Mvc;


namespace server.Controllers;

[ApiController]
[Route("[controller]")]
public class UserSignUpController : ControllerBase
{
  // We need to encode user password and store it in database
  // WE have to refresh everytime we update code
  [HttpPost]
  public IActionResult Post([FromBody] UserData userData)
  {
    Console.WriteLine("this is user data being console logged variable", userData);
    return Ok(userData);
  }
}
public class UserData
{
  public string UserName {get; set;}
  public string UserEmail {get; set;}
  public string UserPassword {get; set;}
}