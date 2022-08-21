/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var marketplace_common_marketplace_common_pb = require('../marketplace_common/marketplace_common_pb.js')
const proto = {};
proto.service = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.service.ServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.service.ServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.GetArtworkDetailsRequest,
 *   !proto.service.GetArtworkDetailsResponse>}
 */
const methodDescriptor_Service_GetArtworkDetails = new grpc.web.MethodDescriptor(
  '/service.Service/GetArtworkDetails',
  grpc.web.MethodType.UNARY,
  proto.service.GetArtworkDetailsRequest,
  proto.service.GetArtworkDetailsResponse,
  /**
   * @param {!proto.service.GetArtworkDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.GetArtworkDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.service.GetArtworkDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.service.GetArtworkDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.GetArtworkDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.ServiceClient.prototype.getArtworkDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.Service/GetArtworkDetails',
      request,
      metadata || {},
      methodDescriptor_Service_GetArtworkDetails,
      callback);
};


/**
 * @param {!proto.service.GetArtworkDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.GetArtworkDetailsResponse>}
 *     Promise that resolves to the response
 */
proto.service.ServicePromiseClient.prototype.getArtworkDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.Service/GetArtworkDetails',
      request,
      metadata || {},
      methodDescriptor_Service_GetArtworkDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.GetArtworksByTitleRequest,
 *   !proto.service.GetArtworksByTitleResponse>}
 */
const methodDescriptor_Service_GetArtworksByTitle = new grpc.web.MethodDescriptor(
  '/service.Service/GetArtworksByTitle',
  grpc.web.MethodType.UNARY,
  proto.service.GetArtworksByTitleRequest,
  proto.service.GetArtworksByTitleResponse,
  /**
   * @param {!proto.service.GetArtworksByTitleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.GetArtworksByTitleResponse.deserializeBinary
);


/**
 * @param {!proto.service.GetArtworksByTitleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.service.GetArtworksByTitleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.GetArtworksByTitleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.ServiceClient.prototype.getArtworksByTitle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.Service/GetArtworksByTitle',
      request,
      metadata || {},
      methodDescriptor_Service_GetArtworksByTitle,
      callback);
};


/**
 * @param {!proto.service.GetArtworksByTitleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.GetArtworksByTitleResponse>}
 *     Promise that resolves to the response
 */
proto.service.ServicePromiseClient.prototype.getArtworksByTitle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.Service/GetArtworksByTitle',
      request,
      metadata || {},
      methodDescriptor_Service_GetArtworksByTitle);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.GetArtworksByArtistRequest,
 *   !proto.service.GetArtworksByArtistResponse>}
 */
const methodDescriptor_Service_GetArtworksByArtist = new grpc.web.MethodDescriptor(
  '/service.Service/GetArtworksByArtist',
  grpc.web.MethodType.UNARY,
  proto.service.GetArtworksByArtistRequest,
  proto.service.GetArtworksByArtistResponse,
  /**
   * @param {!proto.service.GetArtworksByArtistRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.GetArtworksByArtistResponse.deserializeBinary
);


/**
 * @param {!proto.service.GetArtworksByArtistRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.service.GetArtworksByArtistResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.GetArtworksByArtistResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.ServiceClient.prototype.getArtworksByArtist =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.Service/GetArtworksByArtist',
      request,
      metadata || {},
      methodDescriptor_Service_GetArtworksByArtist,
      callback);
};


/**
 * @param {!proto.service.GetArtworksByArtistRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.GetArtworksByArtistResponse>}
 *     Promise that resolves to the response
 */
proto.service.ServicePromiseClient.prototype.getArtworksByArtist =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.Service/GetArtworksByArtist',
      request,
      metadata || {},
      methodDescriptor_Service_GetArtworksByArtist);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.GetUserProfileRequest,
 *   !proto.service.GetUserProfileResponse>}
 */
const methodDescriptor_Service_GetUserProfile = new grpc.web.MethodDescriptor(
  '/service.Service/GetUserProfile',
  grpc.web.MethodType.UNARY,
  proto.service.GetUserProfileRequest,
  proto.service.GetUserProfileResponse,
  /**
   * @param {!proto.service.GetUserProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.GetUserProfileResponse.deserializeBinary
);


/**
 * @param {!proto.service.GetUserProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.service.GetUserProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.GetUserProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.ServiceClient.prototype.getUserProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.Service/GetUserProfile',
      request,
      metadata || {},
      methodDescriptor_Service_GetUserProfile,
      callback);
};


/**
 * @param {!proto.service.GetUserProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.GetUserProfileResponse>}
 *     Promise that resolves to the response
 */
proto.service.ServicePromiseClient.prototype.getUserProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.Service/GetUserProfile',
      request,
      metadata || {},
      methodDescriptor_Service_GetUserProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.CreateUserProfileRequest,
 *   !proto.service.CreateUserProfileResponse>}
 */
const methodDescriptor_Service_CreateUserProfile = new grpc.web.MethodDescriptor(
  '/service.Service/CreateUserProfile',
  grpc.web.MethodType.UNARY,
  proto.service.CreateUserProfileRequest,
  proto.service.CreateUserProfileResponse,
  /**
   * @param {!proto.service.CreateUserProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.CreateUserProfileResponse.deserializeBinary
);


/**
 * @param {!proto.service.CreateUserProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.service.CreateUserProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.CreateUserProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.ServiceClient.prototype.createUserProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.Service/CreateUserProfile',
      request,
      metadata || {},
      methodDescriptor_Service_CreateUserProfile,
      callback);
};


/**
 * @param {!proto.service.CreateUserProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.CreateUserProfileResponse>}
 *     Promise that resolves to the response
 */
proto.service.ServicePromiseClient.prototype.createUserProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.Service/CreateUserProfile',
      request,
      metadata || {},
      methodDescriptor_Service_CreateUserProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.BidRequest,
 *   !proto.service.BidResponse>}
 */
const methodDescriptor_Service_Bid = new grpc.web.MethodDescriptor(
  '/service.Service/Bid',
  grpc.web.MethodType.UNARY,
  proto.service.BidRequest,
  proto.service.BidResponse,
  /**
   * @param {!proto.service.BidRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.BidResponse.deserializeBinary
);


/**
 * @param {!proto.service.BidRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.service.BidResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.BidResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.ServiceClient.prototype.bid =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.Service/Bid',
      request,
      metadata || {},
      methodDescriptor_Service_Bid,
      callback);
};


/**
 * @param {!proto.service.BidRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.BidResponse>}
 *     Promise that resolves to the response
 */
proto.service.ServicePromiseClient.prototype.bid =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.Service/Bid',
      request,
      metadata || {},
      methodDescriptor_Service_Bid);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.AskRequest,
 *   !proto.service.AskResponse>}
 */
const methodDescriptor_Service_Ask = new grpc.web.MethodDescriptor(
  '/service.Service/Ask',
  grpc.web.MethodType.UNARY,
  proto.service.AskRequest,
  proto.service.AskResponse,
  /**
   * @param {!proto.service.AskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.AskResponse.deserializeBinary
);


/**
 * @param {!proto.service.AskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.service.AskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.AskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.ServiceClient.prototype.ask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.Service/Ask',
      request,
      metadata || {},
      methodDescriptor_Service_Ask,
      callback);
};


/**
 * @param {!proto.service.AskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.AskResponse>}
 *     Promise that resolves to the response
 */
proto.service.ServicePromiseClient.prototype.ask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.Service/Ask',
      request,
      metadata || {},
      methodDescriptor_Service_Ask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.GetBidsRequest,
 *   !proto.service.GetBidsResponse>}
 */
const methodDescriptor_Service_GetBids = new grpc.web.MethodDescriptor(
  '/service.Service/GetBids',
  grpc.web.MethodType.UNARY,
  proto.service.GetBidsRequest,
  proto.service.GetBidsResponse,
  /**
   * @param {!proto.service.GetBidsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.GetBidsResponse.deserializeBinary
);


/**
 * @param {!proto.service.GetBidsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.service.GetBidsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.GetBidsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.ServiceClient.prototype.getBids =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.Service/GetBids',
      request,
      metadata || {},
      methodDescriptor_Service_GetBids,
      callback);
};


/**
 * @param {!proto.service.GetBidsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.GetBidsResponse>}
 *     Promise that resolves to the response
 */
proto.service.ServicePromiseClient.prototype.getBids =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.Service/GetBids',
      request,
      metadata || {},
      methodDescriptor_Service_GetBids);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.GetAsksRequest,
 *   !proto.service.GetAsksResponse>}
 */
const methodDescriptor_Service_GetAsks = new grpc.web.MethodDescriptor(
  '/service.Service/GetAsks',
  grpc.web.MethodType.UNARY,
  proto.service.GetAsksRequest,
  proto.service.GetAsksResponse,
  /**
   * @param {!proto.service.GetAsksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.GetAsksResponse.deserializeBinary
);


/**
 * @param {!proto.service.GetAsksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.service.GetAsksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.GetAsksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.ServiceClient.prototype.getAsks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.Service/GetAsks',
      request,
      metadata || {},
      methodDescriptor_Service_GetAsks,
      callback);
};


/**
 * @param {!proto.service.GetAsksRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.GetAsksResponse>}
 *     Promise that resolves to the response
 */
proto.service.ServicePromiseClient.prototype.getAsks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.Service/GetAsks',
      request,
      metadata || {},
      methodDescriptor_Service_GetAsks);
};


module.exports = proto.service;

