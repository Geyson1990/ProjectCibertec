using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using SlnCibertec.Core.Entities;

namespace SlnCibertec.Core.Interfaces
{
    public interface ICibertecContext
    {
        DbSet<Product> Products { get; set; }
        DbSet<Category> Categories { get; set; }
        DbSet<ProductCategory> ProductCategories { get; set; }
        DbSet<User> Users { get; set; }
        DbSet<RefreshToken> RefreshTokens { get; set; }
        DbSet<Compra> Compras { get; set; }
        DbSet<Cliente> Clientes { get; set; }
        DbSet<Proveedor> Proveedores { get; set; }

        /// <summary>
        /// Internamente este método invocará el método SaveChanges del contexto
        /// </summary>
        /// <returns></returns>
        int Commit();
        /// <summary>
        /// Método para migrar la BD
        /// </summary>
        /// <returns></returns>
        bool Migrate();
    }
}
