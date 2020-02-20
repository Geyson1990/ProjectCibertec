using Microsoft.EntityFrameworkCore.Migrations;

namespace SlnCibertec.Infra.Migrations
{
    public partial class vsdfasd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ID_USUARIO",
                table: "Compras",
                newName: "USUARIO");

            migrationBuilder.RenameColumn(
                name: "ID_TIPO_COMPROBANTE",
                table: "Compras",
                newName: "TIPO_COMPROBANTE");

            migrationBuilder.RenameColumn(
                name: "ID_PROVEEDOR",
                table: "Compras",
                newName: "PROVEEDOR");

            migrationBuilder.RenameColumn(
                name: "ID_MONEDA",
                table: "Compras",
                newName: "MONEDA");

            migrationBuilder.RenameColumn(
                name: "ID_CONDICION_PAGO",
                table: "Compras",
                newName: "CONDICION_PAGO");

            migrationBuilder.RenameColumn(
                name: "ID_CLIENTE",
                table: "Compras",
                newName: "CLIENTE");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "USUARIO",
                table: "Compras",
                newName: "ID_USUARIO");

            migrationBuilder.RenameColumn(
                name: "TIPO_COMPROBANTE",
                table: "Compras",
                newName: "ID_TIPO_COMPROBANTE");

            migrationBuilder.RenameColumn(
                name: "PROVEEDOR",
                table: "Compras",
                newName: "ID_PROVEEDOR");

            migrationBuilder.RenameColumn(
                name: "MONEDA",
                table: "Compras",
                newName: "ID_MONEDA");

            migrationBuilder.RenameColumn(
                name: "CONDICION_PAGO",
                table: "Compras",
                newName: "ID_CONDICION_PAGO");

            migrationBuilder.RenameColumn(
                name: "CLIENTE",
                table: "Compras",
                newName: "ID_CLIENTE");
        }
    }
}
