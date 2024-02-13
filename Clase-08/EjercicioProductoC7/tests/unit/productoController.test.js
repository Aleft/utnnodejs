const {
  getAllProductos,
  createProducto,
} = require("../../src/controllers/productoController");

const productoModel = require("../../src/models/productoModel");

jest.mock("../../src/models/productoModel");

describe("producto controller", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("getAllProductos deberia obtener todos los productos", async () => {
    const mockProductos = [
      { name: "producto 1", price: 10 },
      { name: "producto 2", price: 20 },
    ];

    productoModel.find.mockResolvedValue(mockProductos);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getAllProductos(req, res);

    expect(res.status).toHaveBeenCalledWith(200); //Que obtenga esta respuesta
    expect(res.json).toHaveBeenCalledWith(mockProductos); //Que el json de la respuesta sea el mockUp que di
    expect(productoModel.find).toHaveBeenCalledTimes(1); //Que sea llamada solo una vez
  });
  //////////////////////////////////////////////////////////////////

  test("getAllProductos deberia manejar errores", async () => {
    const errorMessage = "Error al obtener los productos";

    productoModel.find.mockRejectedValue(new Error(errorMessage));

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getAllProductos(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    expect(productoModel.find).toHaveBeenCalledTimes(1);
  });

  //////////////////////////////////////////////////////////////////

  test("createProducto deberia crear un nuevo producto", async () => {
    const mockProductoData = { name: "nuevo producto", price: 15 }; //simular que creamos un productos
    const mockSavedProducto = { _id: "1", ...mockProductoData }; //Simular el producto que se creo

    productoModel.create.mockResolvedValue(mockSavedProducto);

    const req = { body: mockProductoData };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await createProducto(req, res);

    expect(res.status).toHaveBeenCalledWith(201); //
    expect(res.json).toHaveBeenCalledWith(mockSavedProducto); //Si lo que guarde es lo mismo que esta en la db
    expect(productoModel.create).toHaveBeenCalledTimes(1); //Si el create se ejecuto una vez
    expect(productoModel.create).toHaveBeenCalledWith(mockProductoData); //Si esa funcion create recibio como datos la funcion test createproduct
  });
});
