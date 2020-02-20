using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SlnCibertec.Core.Entities;
using SlnCibertec.Core.Interfaces;
using SlnCibertec.Infra.Data;

namespace SlnCibertec.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComprasController : ControllerBase
    {
        private readonly ICibertecContext _context;
        private readonly ICompraService _compraService;

        public ComprasController(ICibertecContext context, ICompraService compraService)
        {
            _context = context;
            _compraService = compraService;
        }

       

        [HttpPost]
        public ActionResult Insertar(Compra request)
        {
            var registroCorrecto = _compraService.RegistrarCompra(request);
            if (!registroCorrecto)
            {
                return BadRequest("Ocurrió un error con la solicitud enviada");
            }
            return Ok("se registró el producto satisfactoriamente");
        }

        [HttpGet]
        [Authorize]
        public ActionResult ObtenerTodos()
        {
            return Ok(_context.Compras);
        }


    }
}
