using ContosoHero.Models;
using System.Collections.Generic;
using System.Linq;

namespace ContosoHero.Services
{
  public static class HeroService
  {
    static List<Hero> Heroes { get; }
    static int nextId = 3;
    static HeroService()
    {
      Heroes = new List<Hero>
            {
                new Hero { Id = 1, Name = "Dr IQ", Power =  "Fly", AlterEgo ="Weather Changer"},
                new Hero { Id = 2, Name = "Veggie", Power =  "Lazer", AlterEgo ="Weather Changer"},
            };
    }

    public static List<Hero> GetAll() => Heroes;

    public static Hero Get(int id) => Heroes.FirstOrDefault(p => p.Id == id);

    public static void Add(Hero hero)
    {
      hero.Id = nextId++;
      Heroes.Add(hero);
    }

    public static void Delete(int id)
    {
      var hero = Get(id);
      if (hero is null)
        return;

      Heroes.Remove(hero);
    }

    public static void Update(Hero hero)
    {
      var index = Heroes.FindIndex(p => p.Id == hero.Id);
      if (index == -1)
        return;

      Heroes[index] = hero;
    }
  }
}
