using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SlnCibertec.Core.Entities
{
    public class Compra
    {
        [Key]
        public int ID { get; set; }
        public string NUMERO_COMPROBANTE { get; set; }
        public string SERIE_COMPROBANTE { get; set; }
        public string FECHA_EMISION { get; set; }
        public string FECHA_VENCIMIENTO { get; set; }
        public decimal SUBTOTAL { get; set; }
        public decimal IGV { get; set; }
        public decimal TOTAL { get; set; }
        public int PROVEEDOR { get; set; }
        public int CLIENTE { get; set; }
        public int TIPO_COMPROBANTE { get; set; }
        public int MONEDA { get; set; }
        public int CONDICION_PAGO { get; set; }
        public int USUARIO { get; set; }
        public string FECHA_CREACION { get; set; }
        public int ESTADO { get; set; }
    }
}
