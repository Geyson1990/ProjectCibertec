using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SlnCibertec.Infra.Migrations
{
    public partial class v10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RazonSocial = table.Column<string>(nullable: true),
                    Ruc = table.Column<string>(nullable: true),
                    Direccion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Compras",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    NUMERO_COMPROBANTE = table.Column<string>(nullable: true),
                    SERIE_COMPROBANTE = table.Column<string>(nullable: true),
                    FECHA_EMISION = table.Column<string>(nullable: true),
                    FECHA_VENCIMIENTO = table.Column<string>(nullable: true),
                    SUBTOTAL = table.Column<decimal>(nullable: false),
                    IGV = table.Column<decimal>(nullable: false),
                    TOTAL = table.Column<decimal>(nullable: false),
                    ID_PROVEEDOR = table.Column<int>(nullable: false),
                    ID_CLIENTE = table.Column<int>(nullable: false),
                    ID_TIPO_COMPROBANTE = table.Column<int>(nullable: false),
                    ID_MONEDA = table.Column<int>(nullable: false),
                    ID_CONDICION_PAGO = table.Column<int>(nullable: false),
                    ID_USUARIO = table.Column<int>(nullable: false),
                    FECHA_CREACION = table.Column<string>(nullable: true),
                    ESTADO = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Compras", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Proveedores",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RazonSocial = table.Column<string>(nullable: true),
                    Ruc = table.Column<string>(nullable: true),
                    Direccion = table.Column<string>(nullable: true),
                    Telefono = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proveedores", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clientes");

            migrationBuilder.DropTable(
                name: "Compras");

            migrationBuilder.DropTable(
                name: "Proveedores");
        }
    }
}
