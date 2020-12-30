// source: jdocs.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.jdocspb.WriteDocReq');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.jdocspb.Jdoc');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jdocspb.WriteDocReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jdocspb.WriteDocReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jdocspb.WriteDocReq.displayName = 'proto.jdocspb.WriteDocReq';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jdocspb.WriteDocReq.prototype.toObject = function(opt_includeInstance) {
  return proto.jdocspb.WriteDocReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jdocspb.WriteDocReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jdocspb.WriteDocReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    thing: jspb.Message.getFieldWithDefault(msg, 2, ""),
    docName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    doc: (f = msg.getDoc()) && proto.jdocspb.Jdoc.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jdocspb.WriteDocReq}
 */
proto.jdocspb.WriteDocReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jdocspb.WriteDocReq;
  return proto.jdocspb.WriteDocReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jdocspb.WriteDocReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jdocspb.WriteDocReq}
 */
proto.jdocspb.WriteDocReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setThing(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocName(value);
      break;
    case 4:
      var value = new proto.jdocspb.Jdoc;
      reader.readMessage(value,proto.jdocspb.Jdoc.deserializeBinaryFromReader);
      msg.setDoc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jdocspb.WriteDocReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jdocspb.WriteDocReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jdocspb.WriteDocReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jdocspb.WriteDocReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getThing();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDocName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDoc();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.jdocspb.Jdoc.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.jdocspb.WriteDocReq.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jdocspb.WriteDocReq} returns this
 */
proto.jdocspb.WriteDocReq.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string thing = 2;
 * @return {string}
 */
proto.jdocspb.WriteDocReq.prototype.getThing = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.jdocspb.WriteDocReq} returns this
 */
proto.jdocspb.WriteDocReq.prototype.setThing = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string doc_name = 3;
 * @return {string}
 */
proto.jdocspb.WriteDocReq.prototype.getDocName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.jdocspb.WriteDocReq} returns this
 */
proto.jdocspb.WriteDocReq.prototype.setDocName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Jdoc doc = 4;
 * @return {?proto.jdocspb.Jdoc}
 */
proto.jdocspb.WriteDocReq.prototype.getDoc = function() {
  return /** @type{?proto.jdocspb.Jdoc} */ (
    jspb.Message.getWrapperField(this, proto.jdocspb.Jdoc, 4));
};


/**
 * @param {?proto.jdocspb.Jdoc|undefined} value
 * @return {!proto.jdocspb.WriteDocReq} returns this
*/
proto.jdocspb.WriteDocReq.prototype.setDoc = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jdocspb.WriteDocReq} returns this
 */
proto.jdocspb.WriteDocReq.prototype.clearDoc = function() {
  return this.setDoc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jdocspb.WriteDocReq.prototype.hasDoc = function() {
  return jspb.Message.getField(this, 4) != null;
};

