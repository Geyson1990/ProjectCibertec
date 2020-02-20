﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SlnCibertec.Infra.Data;

namespace SlnCibertec.Infra.Migrations
{
    [DbContext(typeof(CibertecContext))]
    [Migration("20200218213250_v.1.0.")]
    partial class v10
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SlnCibertec.Core.Entities.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CategoryName");

                    b.Property<string>("Description");

                    b.Property<string>("Picture");

                    b.HasKey("CategoryId");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("SlnCibertec.Core.Entities.Cliente", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Direccion");

                    b.Property<string>("RazonSocial");

                    b.Property<string>("Ruc");

                    b.HasKey("ID");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("SlnCibertec.Core.Entities.Compra", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ESTADO");

                    b.Property<string>("FECHA_CREACION");

                    b.Property<string>("FECHA_EMISION");

                    b.Property<string>("FECHA_VENCIMIENTO");

                    b.Property<int>("ID_CLIENTE");

                    b.Property<int>("ID_CONDICION_PAGO");

                    b.Property<int>("ID_MONEDA");

                    b.Property<int>("ID_PROVEEDOR");

                    b.Property<int>("ID_TIPO_COMPROBANTE");

                    b.Property<int>("ID_USUARIO");

                    b.Property<decimal>("IGV");

                    b.Property<string>("NUMERO_COMPROBANTE");

                    b.Property<string>("SERIE_COMPROBANTE");

                    b.Property<decimal>("SUBTOTAL");

                    b.Property<decimal>("TOTAL");

                    b.HasKey("ID");

                    b.ToTable("Compras");
                });

            modelBuilder.Entity("SlnCibertec.Core.Entities.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Discontinued");

                    b.Property<string>("ProductName")
                        .IsRequired();

                    b.Property<int>("QuantityPerUnit");

                    b.Property<decimal>("UnitPrice")
                        .HasColumnType("decimal(10,2)");

                    b.Property<int>("UnitsInStock");

                    b.HasKey("ProductId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("SlnCibertec.Core.Entities.ProductCategory", b =>
                {
                    b.Property<int>("ProductId");

                    b.Property<int>("CategoryId");

                    b.HasKey("ProductId", "CategoryId");

                    b.HasIndex("CategoryId");

                    b.ToTable("ProductCategories");
                });

            modelBuilder.Entity("SlnCibertec.Core.Entities.Proveedor", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Direccion");

                    b.Property<string>("RazonSocial");

                    b.Property<string>("Ruc");

                    b.Property<string>("Telefono");

                    b.HasKey("ID");

                    b.ToTable("Proveedores");
                });

            modelBuilder.Entity("SlnCibertec.Core.Entities.RefreshToken", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("ExpiresAt");

                    b.Property<string>("Token");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("RefreshTokens");
                });

            modelBuilder.Entity("SlnCibertec.Core.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Dni");

                    b.Property<string>("Email");

                    b.Property<string>("Name");

                    b.Property<string>("Password");

                    b.Property<string>("Roles");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("SlnCibertec.Core.Entities.ProductCategory", b =>
                {
                    b.HasOne("SlnCibertec.Core.Entities.Category", "Category")
                        .WithMany("ProductCategories")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SlnCibertec.Core.Entities.Product", "Product")
                        .WithMany("ProductCategories")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SlnCibertec.Core.Entities.RefreshToken", b =>
                {
                    b.HasOne("SlnCibertec.Core.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
