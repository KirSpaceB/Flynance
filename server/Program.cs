using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using MySql.Data.MySqlClient;
using server.Controllers;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//Configure DbContext to use MySQL
builder.Services.AddDbContext<UserLoginDBContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("FlynanceDatabaseConnection"), 
        new MySqlServerVersion(new Version(8, 0, 35)))); // Make sure to match the MySQL version

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Manually register IPasswordHasher<Users>
builder.Services.AddScoped<IPasswordHasher<Users>, PasswordHasher<Users>>();

// Add Cors Service
builder.Services.AddCors(options => 
{
    options.AddPolicy("MyAllowSpecificOrigins", 
    builder => 
    {
        builder.WithOrigins("http://localhost:5174").AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("MyAllowSpecificOrigins");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
