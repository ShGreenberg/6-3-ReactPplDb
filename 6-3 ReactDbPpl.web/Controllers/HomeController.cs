using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _6_3_ReactDbPpl.data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace _6_3_ReactDbPpl.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private string _connString;
        public HomeController(IConfiguration configuration)
        {
            _connString = configuration.GetConnectionString("ConStr");
        }

        [Route("addperson")]
        [HttpPost]
        public void AddPerson(Person person)
        {
            PersonRepository rep = new PersonRepository(_connString);
            rep.AddPerson(person);
        }

        [Route("getpeople")]
        public IEnumerable<Person> GetPeople()
        {
            PersonRepository rep = new PersonRepository(_connString);
            var c = rep.GetPeople();
            return rep.GetPeople();
        }

        [Route("deletepeople")]
        [HttpPost]
        public void DeletePeople(ListInt pplDeleteIds)
        {
            PersonRepository rep = new PersonRepository(_connString);
            List<int> ids = pplDeleteIds.Ids.ToList();
            rep.DeletePeople(ids);
        }
    }

    public class ListInt
    {
        public List<int> Ids { get; set; }
    }
}