using System;
using System.Collections.Generic;
using System.Text;
using SlnCibertec.Core.Entities;

namespace SlnCibertec.Core.Interfaces
{
    public interface ICompraService
    {
        
        /// <summary>
        /// Lo que hace el método
        /// </summary>
        /// <param name="nuevoProducto">El nuevo producto que se va a isnertar</param>
        /// <returns></returns>
        bool RegistrarCompra(Compra compra);


        
    }
}
