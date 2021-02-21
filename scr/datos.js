db.empleados.insertMany([

    {_id: "52259463M", 
    nombre: "Maria José Muñoz Jimenez",
    fechaEntrada: new Date("2018-05-03"), 
    jornadaSemanal:40, 
    departamento: "Magia",
    proyecto:125,
    faltas:0},

    {_id: "65984521G", nombre: "Alejandro Mármol Muñoz", fechaEntrada: new Date("2018-07-21"), jornadaSemanal:43, departamento: "Magia", proyecto: 16, faltas: 2},
    {_id: "65143256J", nombre: "Javier Moreno Muñoz", fechaEntrada: new Date("2019-02-11"), jornadaSemanal:38, departamento: "Magia", proyecto: 74, faltas: 4},
    {_id: "45412355H", nombre: "Wifly Stark Castro", fechaEntrada: new Date("2019-02-19"), jornadaSemanal:27, departamento: "Magia", proyecto: 54, faltas: 0},
    {_id: "55433968N", nombre: "Diego Rósame Caricia", fechaEntrada: new Date("2019-04-12"), jornadaSemanal:45, departamento: "Energías Renovables", proyecto: 81, faltas: 0},
    {_id: "78651324H", nombre: "Alibabá Alahuak Bárcenas", fechaEntrada: new Date("2019-05-30"), jornadaSemanal:37, departamento: "Energías Renovables", proyecto: 77, faltas: 0},
    {_id: "89622154M", nombre: "Andrea Árbol Ramas", fechaEntrada: new Date("2020-01-29"), jornadaSemanal:40, departamento: "Energías Renovables", proyecto: 14, faltas: 0},
    {_id: "17554688B", nombre: "Diego Ordóñez Jiménez", fechaEntrada: new Date("2020-02-12"), jornadaSemanal:38, departamento: "Energías Renovables", proyecto: 103, faltas: 0},
    {_id: "54654631C", nombre: "Laura Gutierrez Dedal", fechaEntrada: new Date("2020-04-18"), jornadaSemanal:45, departamento: "Medicina", proyecto: 09, faltas: 0},
    {_id: "78555236N", nombre: "Fernado Almodobar Bando", fechaEntrada: new Date("2020-06-03"), jornadaSemanal:45, departamento: "Medicina", proyecto: 69, faltas: 3},
    {_id: "48745452F", nombre: "Alejandro García Lorca", fechaEntrada: new Date("2020-06-04"), jornadaSemanal:40, departamento: "Medicina", proyecto: 166, faltas: 1},
    {_id: "74448948G", nombre: "Églogas Epístolas Elegías", fechaEntrada: new Date("2020-08-21"), jornadaSemanal:43, departamento: "Medicina", proyecto: 06, faltas: 0},

])

db.departamentos.insertMany([

    {_id: "Magia",
    ingresoMensual:100000,
    sueldoHora:10.55,
    proyectos:[125,74,16,54]
    },
    {_id: "Energías Renovables", ingresoMensual:95000, sueldoHora:8.75, proyectos:[81,14,77,103]},
    {_id: "Medicina", ingresoMensual:150000, sueldoHora:15.89, proyectos:[09,166,69,06]},
])

db.proyectos.insertMany([

    {_id:125, pseudónimo: "Alomancia"},
    {_id:74, pseudónimo: "Hemalurguia"},
    {_id:81, pseudónimo: "Generadores eólicos"},
    {_id:14, pseudónimo: "Placas Solares"},
    {_id:09, pseudónimo: "Cáncer"},
    {_id:166, pseudónimo: "IronTooth"},
    {_id:16, pseudónimo: "Ferruquimia"},
    {_id:54, pseudónimo: "Simpatía"},
    {_id:77, pseudónimo: "Aerogenerador acuático"},
    {_id:103, pseudónimo: "Girasoles eléctricos"},
    {_id:69, pseudónimo: "Alzheimer"},
    {_id:06, pseudónimo: "Muela del juicio"}
])

