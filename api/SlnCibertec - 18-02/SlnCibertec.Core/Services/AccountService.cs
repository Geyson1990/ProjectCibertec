using SlnCibertec.Core.Entities;
using SlnCibertec.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SlnCibertec.Core.Services
{
    public class AccountService : IAccountService
    {
        private readonly ICibertecContext _context;
        public AccountService(ICibertecContext context)
        {
            _context = context;
        }

        public User ValidateUser(string email, string password)
        {
            // obtener el registro de la bd
            var user = _context.Users.FirstOrDefault(u => u.Email == email && u.Password == password);

            return user;
        }
    }
}
