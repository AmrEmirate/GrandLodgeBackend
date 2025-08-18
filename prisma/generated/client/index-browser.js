
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  role: 'role',
  fullName: 'fullName',
  email: 'email',
  password: 'password',
  profilePicture: 'profilePicture',
  provider: 'provider',
  providerId: 'providerId',
  verified: 'verified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TenantScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  companyName: 'companyName',
  addressCompany: 'addressCompany',
  phoneNumberCompany: 'phoneNumberCompany',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.PropertyScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  name: 'name',
  categoryId: 'categoryId',
  description: 'description',
  location: 'location',
  latitude: 'latitude',
  longitude: 'longitude',
  provinsi: 'provinsi',
  zipCode: 'zipCode',
  mainImage: 'mainImage',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PropertyImageScalarFieldEnum = {
  id: 'id',
  propertyId: 'propertyId',
  imageUrl: 'imageUrl'
};

exports.Prisma.RoomScalarFieldEnum = {
  id: 'id',
  propertyId: 'propertyId',
  name: 'name',
  category: 'category',
  description: 'description',
  bedOption: 'bedOption',
  imageRoom: 'imageRoom',
  capacity: 'capacity',
  basePrice: 'basePrice',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoomImageScalarFieldEnum = {
  id: 'id',
  roomId: 'roomId',
  imageUrl: 'imageUrl'
};

exports.Prisma.RoomAvailabilityScalarFieldEnum = {
  id: 'id',
  roomId: 'roomId',
  isAvailable: 'isAvailable',
  date: 'date',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BookingScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  propertyId: 'propertyId',
  invoiceNumber: 'invoiceNumber',
  checkIn: 'checkIn',
  checkOut: 'checkOut',
  totalPrice: 'totalPrice',
  status: 'status',
  paymentDeadline: 'paymentDeadline',
  paymentProof: 'paymentProof',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BookingRoomScalarFieldEnum = {
  id: 'id',
  bookingId: 'bookingId',
  roomId: 'roomId',
  guestCount: 'guestCount',
  pricePerNight: 'pricePerNight',
  numberOfNights: 'numberOfNights',
  totalPrice: 'totalPrice',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  propertyId: 'propertyId',
  bookingId: 'bookingId',
  comment: 'comment',
  tenantReply: 'tenantReply',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TokenScalarFieldEnum = {
  id: 'id',
  token: 'token',
  purpose: 'purpose',
  expiresAt: 'expiresAt',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserRole = exports.$Enums.UserRole = {
  TENANT: 'TENANT',
  USER: 'USER'
};

exports.RoomCategory = exports.$Enums.RoomCategory = {
  STANDARD: 'STANDARD',
  DELUXE: 'DELUXE',
  SUITE: 'SUITE'
};

exports.BedOption = exports.$Enums.BedOption = {
  SINGLE: 'SINGLE',
  DOUBLE: 'DOUBLE',
  TWIN: 'TWIN'
};

exports.BookingStatus = exports.$Enums.BookingStatus = {
  MENUNGGU_PEMBAYARAN: 'MENUNGGU_PEMBAYARAN',
  MENUNGGU_KONFIRMASI: 'MENUNGGU_KONFIRMASI',
  DIPROSES: 'DIPROSES',
  DIBATALKAN: 'DIBATALKAN',
  SELESAI: 'SELESAI'
};

exports.TokenPurpose = exports.$Enums.TokenPurpose = {
  EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
  PASSWORD_RESET: 'PASSWORD_RESET'
};

exports.Prisma.ModelName = {
  User: 'User',
  Tenant: 'Tenant',
  Category: 'Category',
  Property: 'Property',
  PropertyImage: 'PropertyImage',
  Room: 'Room',
  RoomImage: 'RoomImage',
  RoomAvailability: 'RoomAvailability',
  Booking: 'Booking',
  BookingRoom: 'BookingRoom',
  Review: 'Review',
  Token: 'Token'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
