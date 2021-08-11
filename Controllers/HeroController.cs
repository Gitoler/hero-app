using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ContosoHero.Models;
using ContosoHero.Services;

namespace ContosoHero.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class HeroController : ControllerBase
  {
    public HeroController()
    {
    }

    [HttpGet]
    public ActionResult<List<Hero>> GetAll() =>
        HeroService.GetAll();

    [HttpGet("{id}")]
    public ActionResult<Hero> Get(int id)
    {
      var hero = HeroService.Get(id);

      if (hero == null)
        return NotFound();

      return hero;
    }
    [HttpPost]
    public IActionResult Create(Hero hero)
    {
      HeroService.Add(hero);
      return CreatedAtAction(nameof(Create), new { id = hero.Id }, hero);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Hero hero)
    {
      if (id != hero.Id)
        return BadRequest();

      var existingHero = HeroService.Get(id);
      if (existingHero is null)
        return NotFound();

      HeroService.Update(hero);

      return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      var hero = HeroService.Get(id);

      if (hero is null)
        return NotFound();

      HeroService.Delete(id);

      return NoContent();
    }
  }
}
