import {
  createErrorClass,
  createErrorsList,
} from 'node-errors-helpers';
import errorTypes from '../../error-types';

// Validation errors
export const AirValidationError = createErrorClass(
  'AirValidationError',
  'Air service validation error',
  errorTypes.ValidationError
);
Object.assign(AirValidationError, createErrorsList({
  ParamsMissing: 'Params are missing',
  ParamsInvalidType: 'Params should be passed as object',
  PassengersHashMissing: 'Passengers hash of passenger types is missing',
  PassengersCategoryInvalid: 'Passengers hash contains invalid passenger',
  PassengersCountInvalid: 'Passengers category has wrong passegners number',
  LegsMissing: 'Missing legs in request',
  LegsInvalidType: 'Invalid type for legs in request',
  LegsInvalidStructure: 'Leg in leg array foes not all required fields',
  AirPricingSolutionInvalidType: 'air:AirPricingSolution array is expected',
  SegmentsMissing: 'Segments missing in request. See data.',
  BirthDateInvalid: 'Invalid birth date',
  FopMissing: 'Form of payment missing',
  FopTypeUnsupported: 'Form of payment type is unsupported',
  TicketNumberMissing: 'Ticket number missing',
  TicketNumberInvalid: 'Ticket number invalid',
  IncorrectEmail: 'Email is in incorrect format',
  PhoneMissing: 'Missing phone in book request',
  IncorrectPhoneFormat: 'Incorrect phone format. Missing required fields. See data.',
  DeliveryInformation: 'Missing of delivery information fields. See data.',
  ReservationLocator: 'Missing uapi_reservation_locator in request. See data.',
  ExchangeToken: 'Missing exchangeToken in request. See data.',
}, AirValidationError));

export const GdsValidationError = createErrorClass(
  'GdsValidationError',
  'Gds service validation error',
  errorTypes.ValidationError
);
Object.assign(GdsValidationError, createErrorsList({
  PnrMissing: 'PNR is missing in request',
  QueueMissing: 'Queue is missing in request',
  PccMissing: 'Pcc is missing in request',
}, GdsValidationError));

export const AirFlightInfoValidationError = createErrorClass(
  'AirFlightInfoValidationError',
  'Air FlightInfo service validation error',
  errorTypes.ValidationError
);
Object.assign(AirFlightInfoValidationError, createErrorsList({
  AirlineMissing: 'Airline is missing in request',
  FlightNumberMissing: 'Flight number is missing in request',
  DepartureMissing: 'Departure is missing in request',
}, AirFlightInfoValidationError));

// Parsing errors
export const AirParsingError = createErrorClass(
  'AirParsingError',
  'Air service parsing error',
  errorTypes.ParsingError
);
Object.assign(AirParsingError, createErrorsList({
  ResponseDataMissing: 'One of main data arrays is missing in parsed XML response',
  ReservationsMissing: 'Reservations missing in response',
  BookingInfoError: 'air:BookingInfo should be an array',
  PlatingCarriersError: 'Plating carriers do not coincide across all passenger reservations',
  PTCIsNotSet: 'Code is not set for PassengerTypeCode item',
  PTCTypeInvalid: 'PassengerTypeCode is supposed to be a string or array of PassengerTypeCode items',
  HistogramTypeInvalid: 'PassengerType is supposed to be an array',
  MultiplePricingSolutionsNotAllowed: 'Expected only one pricing solution, need to clarify search?',
  PricingSolutionNotFound: 'Pricing solution not found',
  ReservationProviderInfoMissing: 'Can\'t find provider information about reservation',
  CancelResponseNotFound: 'Cancel response not found',
}, AirParsingError));

// Runtime errors
export const AirRuntimeError = createErrorClass(
  'AirRuntimeError',
  'Air service runtime error',
  errorTypes.RuntimeError
);
Object.assign(AirRuntimeError, createErrorsList({
  SegmentBookingFailed: 'Failed to book on or more segments',
  TicketingFailed: 'Ticketing failed',
  TicketingFoidRequired: 'FOID required for the PC selected',
  TicketingResponseMissing: 'Response message text doesn\'t contain OK:Ticket issued',
  TicketingTicketsMissing: 'Tickets not found in ticketing response',
  NoResultsFound: 'No results found',
  InvalidRequestData: 'Request data is invalid',
  NoValidFare: 'No valid fare for input criteria.',
  TravelersListError: 'Not all BookingTravelers present in list or wrong lookup keys provided',
  PnrParseError: 'Failed to parse PNR from ticket information request response',
  GetPnrError: 'Failed to obtain PNR from ticket information',
  UnableToRetrieveTickets: 'Unable to retrieve tickets list',
  TicketRetrieveError: 'Unable to retrieve ticket',
  TicketInfoIncomplete: 'Ticket information is incomplete',
  RequestInconsistency: 'Request faced race condition. Please retry again',
  MissingPaxListAndBooking: 'Cant find anything for your request. List and booking are missing',
  TicketCancelResultUnknown: 'Ticket cancel result is unknown',
  FailedToCancelPnr: 'Failed to cancel PNR',
  FailedToCancelTicket: 'Failed to cancel ticket',
  UnableToCancelTicketStatusNotOpen: 'Unable to cancel ticket with status not OPEN',
  PNRHasOpenTickets: 'Selected PNR has tickets. Please use `cancelTickets` option or cancel tickets manually',
  NoReservationToImport: 'No reservation to import',
  UnableToImportPnr: 'Unable to import requested PNR',
  UnableToOpenPNRInTerminal: 'Unable to open requested PNR in Terminal',
  UnableToAddExtraSegment: 'Unable to add extra segment to PNR',
  UnableToSaveBookingWithExtraSegment: 'Unable to save booking with extra segment',
  NoResidualValue: 'Original ticket has no residual value for this specific itinerary. Issue a new ticket using current fares.',
  TicketsNotIssued: 'Host error during ticket retrieve.',
  CantDetectExchangeReponse: 'Exchange response is unknown.',
  ExchangeTokenIncorrect: 'Can\'t parse exchange token. Please resolve it again.',
  DuplicateTicketFound: 'Duplicate ticket number found. Provide PNR, UR locator',
  NoPNRFoundInUR: 'No PNR found in Universal record',
}, AirRuntimeError));

export const AirFlightInfoRuntimeError = createErrorClass(
  'AirFlightInfoRuntimeError',
  'Air flight info service runtime error',
  errorTypes.RuntimeError
);
Object.assign(AirFlightInfoRuntimeError, createErrorsList({
  FlightNotFound: 'Flight not found',
  AirlineNotSupported: 'Airline not supported',
  InvalidFlightNumber: 'Invalid flight number',
}, AirFlightInfoRuntimeError));

export const GdsRuntimeError = createErrorClass(
  'GdsRuntimeError',
  'Gds service runtime error',
  errorTypes.RuntimeError
);
Object.assign(GdsRuntimeError, createErrorsList({
  PlacingInQueueMessageMissing: 'Placing success message missing',
  PlacingInQueueError: 'Error during placing in queue request',
}, GdsRuntimeError));

export default {
  AirValidationError,
  AirFlightInfoValidationError,
  GdsValidationError,
  AirParsingError,
  AirFlightInfoRuntimeError,
  AirRuntimeError,
  GdsRuntimeError,
};
