import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>MergeJsonObjects</h1>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

// List<JObject> jsonList = new List<JObject>();

// JObject mergedObject = Serializer.MergeJsonObjects(jsonList);

// Serializer.ToJSON(mergedObject);

// ----------------------------------
// public static JObject MergeJsonObjects(List<JObject> jsonList)
// {
//     JObject mergedObject = new JObject();

//     foreach (var json in jsonList)
//     {
//         mergedObject.Merge(json, new JsonMergeSettings
//         {
//             MergeArrayHandling = MergeArrayHandling.Union,
//             MergeNullValueHandling = MergeNullValueHandling.Merge
//         });
//     }

//     return mergedObject;
// }

// ----------------------------------

// public static string ToJSON(object data)
// {
//     var contractResolver = new DefaultContractResolver
//     {
//         NamingStrategy = new CamelCaseNamingStrategy()
//     };

//     string errors = JsonConvert.SerializeObject(data, new JsonSerializerSettings
//     {
//         ContractResolver = contractResolver,
//         Formatting = Formatting.Indented
//     });

//     return errors;
// }
// ----------------------------------

// public static T FromJSON<T>(string json)
//         {
//             return JsonConvert.DeserializeObject<T>(json);
//         }

//         public static bool TryParseJson(string json, out JObject result)
//         {
//             bool isJson;
//             try
//             {
//                 result = JObject.Parse(json);
//                 isJson = true;
//             }
//             catch
//             {
//                 result = null;
//                 isJson = false;
//             }

//             return isJson;
//         }

//         ----------------------------------

//         public static string ToXML(object data, Encoding encoding = null)
//         {
//             XmlSerializer xmlSerializer = new XmlSerializer(data.GetType());

//             string xmlData = "";

//             using (StringWriter textWriter = encoding == null ? new StringWriter() : new UtfXStringWriter(encoding))
//             {
//                 xmlSerializer.Serialize(textWriter, data);
//                 xmlData = textWriter.ToString();
//             }

//             return xmlData;
//         }
//         ----------------------------------

//         public static T FromXML<T>(string xml)
//         {
//             XmlSerializer xmlSerializer = new XmlSerializer(typeof(T));

//             using (StringWriter textWriter = new StringWriter())
//             {
//                 using (TextReader reader = new StringReader(xml))
//                 {
//                     T response = (T)xmlSerializer.Deserialize(reader);
//                     return response;
//                 }
//             }
//         }
//         ----------------------------------

//         public static Dictionary<string, string> ParseToDictionary(object json)
//         {
//             if (json == null)
//             {
//                 throw new BusinessException("Cannot Parse null to Dictionary");
//             }

//             JObject jObject = JObject.FromObject(json);

//             Dictionary<string, object> values = jObject.ToObject<Dictionary<string, object>>();

//             var result = new Dictionary<string, string>();
//             foreach (string key in values.Keys)
//             {
//                 if (!result.ContainsKey(key))
//                 {
//                     result.Add(key.ToLower(), values[key]?.ToString().ToLower() ?? " ");
//                 }
//             }

//             return result;
//         }
//         ----------------------------------

//         public static Dictionary<string, string> ToDictionary<T>(T obj)
//         {
//             var attributes = new Dictionary<string, string>();
//             try
//             {
//                 PropertyInfo[] propertyInfos = obj.GetType().GetProperties();
//                 foreach (PropertyInfo propertyInfo in propertyInfos)
//                 {
//                     if (propertyInfo.PropertyType == typeof(string) || propertyInfo.PropertyType == typeof(bool) ||
//                         propertyInfo.PropertyType == typeof(int) || propertyInfo.PropertyType == typeof(DateTime))
//                     {
//                         attributes.Add(propertyInfo.Name.ToLower(), propertyInfo.GetValue(obj)?.ToString().ToLower() ?? " ");
//                     }
//                 }
//             }
//             catch (Exception ex)
//             {
//                 Logger.Error(ex, ex.Message);
//             }
//             return attributes;
//         }
//         ----------------------------------

//         public static string GetObjectValue(object obj, string property)
//         {
//             try
//             {
//                 if (obj is JObject jObject)
//                 {
//                     if (!jObject.TryGetValue(property, StringComparison.OrdinalIgnoreCase, out JToken jToken))
//                     {
//                         return null;
//                     }

//                     return jToken.ToString();
//                 }

//                 Type type = obj.GetType();

//                 Type dictionaryType = (new Dictionary<string, string>()).GetType();
//                 if (type.Name == dictionaryType.Name)
//                 {
//                     return ((Dictionary<string, string>)obj)[property.ToLower()];
//                 }

//                 Type outputParametersType = (new Dto.IdenitiyProviders.OutputParameters()).GetType();
//                 if (type.Name == outputParametersType.Name)
//                 {
//                     JObject idpJsonObject = JObject.FromObject(obj);
//                     return (string)idpJsonObject.SelectToken(property);
//                 }

//                 PropertyInfo propertyInfo = type.GetProperty(property, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);
//                 if (propertyInfo == null)
//                 {
//                     return null;
//                 }

//                 object value = propertyInfo.GetValue(obj);
//                 if (value == null)
//                 {
//                     return null;
//                 }

//                 return Convert.ToString(value);
//             }
//             catch (Exception ex)
//             {
//                 Logger.Error(ex, "Serializer cannot get object value", nameof(Serializer));
//             }

//             return null;
//         }

//         ----------------------------------
