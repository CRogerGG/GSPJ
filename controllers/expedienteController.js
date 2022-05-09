$(document).ready(function() {
    $("#menuOpcion2").addClass('active bg-gradient-primary');

    let url = '/clientes2/';
    let opcion = null;
    let id, fila;
    
    /*$(document).ready(function() {
        $('#example').DataTable();
    } );*/
    //MOSTRAR
    let tablaDatos = $('#tablaDatos').DataTable({
        "language": {
            "lengthMenu": "Mostrando _MENU_ registros por página",
            "zeroRecords": "No se encontraron coincidencias - sorry",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay datos disponibles",
            "search":         "Buscar: ",
            "paginate": {
                "first":      "Primero",
                "last":       "Último",
                "next":       "Siguiente",
                "previous":   "Anterior"
            }
        }, 
        "ajax":{
            "url": url,
            "dataSrc":""
        },
        "columns":[
            {"data":"id_persona", "visible":true},
            {"data":"nombre",
            render: function ( data, type, row ) {
                return row.nombre + ' ' + row.apaterno + ' ' + row.amaterno;
            }},
            {"data":"domicilio",
            render: function ( data, type, row ) {
                return row.domicilio + '<br>' + row.ciudad + ', ' + row.estado;
            }},
            {"data":"tel_fijo",
            render: function ( data, type, row ) {
                return 'Fijo: ' + row.tel_fijo + '<br>Cel: ' + row.tel_celular;
            }},
            {"data":"email"},
            {"data":"fecha_nacimiento",
            render: function (data,type,row){
                return formatearFecha(row.fecha_nacimiento);
            }},
            {"data":"curp"},
            {"data":"nacionalidad"},
            {"defaultContent": '<div class="d-flex px-2 py-1 align-items-center"> <button class="btnVer btn btn-icon-only btn-rounded btn-outline-info mb-0 me-2 p-3 btn-sm d-flex align-items-center justify-content-center"><i class="material-icons text-lg">visibility</i></button> <button type="button" class="btnEditar btn btn-icon-only btn-rounded btn-outline-warning mb-0 me-2 p-3 btn-sm d-flex align-items-center justify-content-center"><i class="material-icons text-lg">edit</i></button> <button class="btnEliminar btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-2 p-3 btn-sm d-flex align-items-center justify-content-center"><i class="material-icons text-lg">delete</i></button></div>'}
        ]             
    });
    
    function formatearFecha(fecha){
        if(fecha!=null){
            var invertir = fecha.split('-');
            var f = (invertir[2] + '-' + invertir[1] + '-' + invertir[0]);
            //console.log(f);
            return f;
        }
    }
    
    //CREAR
    $("#btnCrear").click(function(){
        opcion='crear';            
        id=null;
        $("#formCliente").trigger("reset");
        $(".titulo-mod").text("Nuevo Cliente");
        //$("#btnGuardar").text("Registrar")
        $("#modalCliente").modal("show");
    });
    
    //EDITAR - Rellena form con los datos correspondientes
    $(document).on("click", ".btnEditar", function(){		            
        opcion='editar';
        fila = $(this).closest("tr");	        
        id = parseInt(fila.find('td:eq(0)').text());
        /*descripcion = fila.find('td:eq(1)').text();
        precio = fila.find('td:eq(2)').text();
        stock = fila.find('td:eq(3)').text();*/
        $.ajax({
            data: {id: id},
            url: url+id,
            type: 'GET',
            dataType : "JSON",
            //async: true,
            error: function(X){
                  alert("ha ocurrido un error");            
              },
            success: function(respuesta){
              //console.log("---success:)----" + respuesta.fecha_nacimiento)     
              if(respuesta){
                  document.getElementById('id').value=respuesta.id_persona;
                  document.getElementById('nombre').value=respuesta.nombre;
                  document.getElementById('apaterno').value=respuesta.apaterno;
                  document.getElementById('amaterno').value=respuesta.amaterno;
                  document.getElementById('domicilio').value=respuesta.domicilio;
                  document.getElementById('ciudad').value=respuesta.ciudad;
                  document.getElementById('estado').value=respuesta.estado;
                  document.getElementById('fecha_nacimiento').value=respuesta.fecha_nacimiento;
                  document.getElementById('curp').value=respuesta.curp;
                  document.getElementById('tel_fijo').value=respuesta.tel_fijo;
                  document.getElementById('tel_celular').value=respuesta.tel_celular;
                  document.getElementById('email').value=respuesta.email;
                  document.getElementById('nacionalidad').value=respuesta.nacionalidad;
                $(".titulo-mod").text("Editar Cliente");
                //$("#btnGuardar").text("Actualizar")
                $("#modalCliente").modal("show");
              }
            }
          });
    });    

    $(document).on("click", ".btnVer", function(){
        fila = $(this).closest("tr");	        
        id = parseInt(fila.find('td:eq(0)').text());
        $.ajax({
            data: {id: id},
            url: url+id,
            type: 'GET',
            dataType : "JSON",
            //async: true,
            error: function(X){
                  alert("ha ocurrido un error");            
              },
            success: function(respuesta){
              //console.log("---success:)----" + respuesta.fecha_nacimiento)     
              if(respuesta){
                Swal.fire({
                    position: 'center',
                    icon: 'info',
                    width: '42rem',
                    title: respuesta.nombre + ' ' + respuesta.apaterno + ' ' + respuesta.amaterno,
                    text: ('Domicilio: '+respuesta.domicilio+', '+respuesta.ciudad+', '+respuesta.estado),
                })
              }
            }
          });


    });

     //BORRAR
     /*
    $(document).on("click", ".btnEliminar", function(){
        fila = $(this);           
        id = parseInt($(this).closest('tr').find('td:eq(0)').text());            
        Swal.fire({
            title: '¿Confirma eliminar el registro?',                
            showCancelButton: true,
            confirmButtonText: `Confirmar`,                
            }).then((result) => {               
            if (result.isConfirmed) {
                $.ajax({
                    url: url+id,
                    method: 'delete',                        
                    data:  {id:id},    
                    success: function() {
                        tablaDatos.row(fila.parents('tr')).remove().draw();                  
                    }
                });
                Swal.fire('¡Registro Eliminado!', '', 'success')
            } 
            })
    });     */
    
    //submit para el CREAR y EDITAR
    $('#formCliente').submit(function(e){                                     
        e.preventDefault();
        id = $.trim($('#id').val());

        if(opcion=='crear'){
            console.log('--> Opcion=crear');
                           
            $.ajax({                    
                url: url,
                type: 'POST',
                //method: 'post',                                                         
                contentType: 'application/json',  
                data:  JSON.stringify({
                    nombre:$('#nombre').val(),
                    apaterno:$('#apaterno').val(),
                    amaterno:$('#amaterno').val(),
                    domicilio:$('#domicilio').val(),
                    ciudad:$('#ciudad').val(),
                    estado:$('#estado').val(),
                    fecha_nacimiento:$('#fecha_nacimiento').val(),
                    curp:$('#curp').val(),
                    tel_fijo:$('#tel_fijo').val(),
                    tel_celular:$('#tel_celular').val(),
                    email:$('#email').val(),
                    nacionalidad:$('#nacionalidad').val(),
                }),                       
                success: function(data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Registrado Correctamente',
                        showConfirmButton: false,
                        timer: 1300
                      })
                    //console.log('SI SE GENERO BIEN EL POST');
                    tablaDatos.ajax.reload(null, false);                        
                }
            });
        }
        if(opcion=='editar'){
            console.log('--> Opcion=editar')

            $.ajax({                    
                url: url+id,
                type: 'PUT',
                //method: 'post',                                                         
                contentType: 'application/json',  
                data:  JSON.stringify({
                    nombre:$('#nombre').val(),
                    apaterno:$('#apaterno').val(),
                    amaterno:$('#amaterno').val(),
                    domicilio:$('#domicilio').val(),
                    ciudad:$('#ciudad').val(),
                    estado:$('#estado').val(),
                    fecha_nacimiento:$('#fecha_nacimiento').val(),
                    curp:$('#curp').val(),
                    tel_fijo:$('#tel_fijo').val(),
                    tel_celular:$('#tel_celular').val(),
                    email:$('#email').val(),
                    nacionalidad:$('#nacionalidad').val(),
                }),                       
                success: function(data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Actualizado Correctamente',
                        showConfirmButton: false,
                        timer: 1300
                      })
                    //console.log('SI SE GENERO BIEN EL POST');
                    tablaDatos.ajax.reload(null, false);                        
                }
            });
        }        		        
        $('#modalCliente').modal('hide');										     			
    });
});