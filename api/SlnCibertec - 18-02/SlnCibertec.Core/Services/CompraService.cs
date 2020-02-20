using System;
using System.Collections.Generic;
using System.Text;
using SlnCibertec.Core.Entities;
using SlnCibertec.Core.Interfaces;
using System.Linq;

namespace SlnCibertec.Core.Services
{
    public class CompraService : ICompraService
    {
        // campo para utilizar el contexto
        private readonly ICibertecContext _cibertecContext;

        public CompraService(ICibertecContext cibertecContext)
        {
            _cibertecContext = cibertecContext;
        }
       
        public bool RegistrarCompra(Compra compra)
        {
            // validaciones
            if (string.IsNullOrEmpty(compra.NUMERO_COMPROBANTE))
            {
                return false;
            }

            // obtener todos los productos registrados que posean el mismo nombre que el que se quiere registrar
            // query syntax
            //var productsWithSameName = from product in _cibertecContext.Products
            //                           where product.ProductName == nuevoProducto.ProductName
            //                           select product;

            // fluent syntax 
            var repetido = _cibertecContext.Compras.Where(p => p.NUMERO_COMPROBANTE.ToUpper() == compra.NUMERO_COMPROBANTE.ToUpper());

            if (repetido.Count() > 0)
            {
                // significa que existen productos registrados que tienen el mismo nombre que el que se desea registrar
                return false;
            }


            // agregar el proucto a BD
            _cibertecContext.Compras.Add(compra);

            return _cibertecContext.Commit() > 0;
        }
    }
}
