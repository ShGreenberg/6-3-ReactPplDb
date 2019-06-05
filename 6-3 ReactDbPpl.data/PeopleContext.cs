using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace _6_3_ReactDbPpl.data
{
    public class PeopleContext: DbContext
    {
        private string _connString;
        public PeopleContext(string connString)
        {
            _connString = connString;
        }
        public DbSet<Person> People { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connString);
        }
    }
}
