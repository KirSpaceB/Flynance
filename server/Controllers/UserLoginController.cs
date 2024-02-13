namespace server.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

public class Users
{
    public int Id { get; set; }
    public string UserName { get; set; }
    public string UserEmail { get; set; }
    public string UserPassword { get; set; }
}

public class LoginDto
{
    public string Email { get; set; }
    public string Password { get; set; }
}

public class UserLoginDBContext : DbContext
{
    public UserLoginDBContext(DbContextOptions<UserLoginDBContext> options)
        :base(options)
    {
    }

    public DbSet<Users> Users { get; set; }
}

[ApiController]
[Route("api/[controller]")]
public class UserLoginController : ControllerBase
{
    public readonly UserLoginDBContext _context;

    public UserLoginController(UserLoginDBContext context, IPasswordHasher<Users> passwordHasher)
    {
        _context = context;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
    {
        var user = await _context.Users.SingleOrDefaultAsync(u => u.UserEmail == loginDto.Email);

        if (user == null)
        {
            return Unauthorized(new { message = "Invalid Login Attempt: No Users" });
        }

        bool validPassword = BCrypt.Net.BCrypt.Verify(loginDto.Password, user.UserPassword);
        if (!validPassword)
        {
            return Unauthorized(new { message = "Invalid login attempt: Wrong Password" });
        }


        return Ok(new {userName = user.UserName, isLoggedIn = true});
    }
}