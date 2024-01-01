using Microsoft.AspNetCore.Mvc;


namespace server.Controllers;

[ApiController]
[Route("[controller]")]
public class UserSignUpController : ControllerBase
{
  [HttpPost]
  public IActionResult Post([FromBody] UserData userData)
  {
    int[] randomArray = new int[] {1,2,3,4,5,6};
    return Ok(randomArray);
  }
}
public class UserData
{
  public string UserName {get; set;}
  public string UserEmail {get; set;}
  public string UserPassword {get; set;}
}