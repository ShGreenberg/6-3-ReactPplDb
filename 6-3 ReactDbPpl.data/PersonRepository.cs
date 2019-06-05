using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _6_3_ReactDbPpl.data
{
    public class PersonRepository
    {
        private string _connString;
        public PersonRepository(string connString)
        {
            _connString = connString;
        }

        public void AddPerson(Person person)
        {
            using(var ctx = new PeopleContext(_connString))
            {
                ctx.People.Add(person);
                ctx.SaveChanges();
            }
        }

        public IEnumerable<Person> GetPeople()
        {
            using(var ctx = new PeopleContext(_connString))
            {
                return ctx.People.ToList();
            }
        }

        public void DeletePeople(List<int> ppl)
        {
            using(var ctx = new PeopleContext(_connString))
            {
                var people = ctx.People.Where(p => ppl.FirstOrDefault(i => i == p.Id) != 0);
                ctx.People.RemoveRange(people);
                ctx.SaveChanges();
            }
        }
    }
}
