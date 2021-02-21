/* Muestra los trabajadores y sus días trabajados junto con su salario, así como el departamento al que pertenecen (1:n) y el proyecto que llevan 
a cabo (1:1), además de mostrar la conducta del empleado en función del número de faltas que tenga acumulado*/

db.empleados.aggregate([

    {$lookup:{
        from: "departamentos",
        localField: "departamento",
        foreignField: "_id",
        as: "departamento"
        }
    },{
    $lookup:{
        from: "proyectos",
        localField: "proyecto",
        foreignField: "_id",
        as: "proyecto"
        }
    },{
    $project:{
        _id:0,
        dni:"$_id",
        trabajador:"$nombre",
        diasTrabajados:
            {$round:
                [{$divide:
                    [{$subtract:[new Date(), "$fechaEntrada"]},
                    86400000]},
                0]
            },
        sueldoHora:"$departamento.sueldoHora",
        salario:
            {$multiply:
                [{$multiply:
                    [{$arrayElemAt:["$departamento.sueldoHora",0]},
                    "$jornadaSemanal"]},
                4]},
        departamento:"$departamento._id",
        proyecto:"$proyecto.pseudónimo",   
        conducta:
            {$cond:
                [{$gte: ["$faltas",2]}, "mala", "buena"]}
        }
    }
  
]).pretty()

