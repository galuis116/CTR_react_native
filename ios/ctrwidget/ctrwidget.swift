//
//  ctrwidget.swift
//  ctrwidget
//
//  Created by Sam Cheng on 2021/1/13.
//

import WidgetKit
import SwiftUI
import Intents

struct SharedData:Decodable {
  let title: String,
      meaning: String
}

struct Provider: TimelineProvider {
  func getSnapshot(in context: Context, completion: @escaping (SimpleEntry) -> Void) {
    let entry = SimpleEntry(date: Date(), title : "", meaning: "")
      completion(entry)
  }
  
  func placeholder(in context: Context) -> SimpleEntry {
    SimpleEntry(date: Date(), title : "Placeholder Title", meaning : "Placeholder meaning" )
  }

  func getTimeline(in context: Context, completion: @escaping (Timeline<SimpleEntry>) -> Void) {
      
      var title = ""
      var meaning = ""
      
      let sharedDefaults = UserDefaults.init(suiteName: "group.com.dkp.ctr.ctr-widget")
      if sharedDefaults != nil {
        do {
          let shared = sharedDefaults?.string(forKey: "widgetData")
          if shared != nil {
            let data = try JSONDecoder().decode(SharedData.self, from:shared!.data(using: .utf8)!)
            title = data.title
            meaning = data.meaning
          }
        }
        catch {
          print(error)
        }
      }
      print(title, meaning)
      if(title != "" && meaning != ""){
        let entry = SimpleEntry(date: Calendar.current.date(byAdding: .minute, value: 1, to: Date())!, title : title, meaning: meaning)
        let timeline = Timeline(entries: [entry], policy: .atEnd)
        completion(timeline)
      }
     
    }
}

struct SimpleEntry: TimelineEntry {
    let date: Date
    let title: String
    let meaning: String
}

struct ctrwidgetEntryView : View {
    var entry: Provider.Entry

    var body: some View {
      ZStack{
        Image("bluesky")
          .resizable()
          .scaledToFill()
          .edgesIgnoringSafeArea(.all)
        VStack{
          Text("CTR Daily")
            .font(.subheadline)
            .fontWeight(.bold)
            .foregroundColor(Color.white)
            .multilineTextAlignment(.center)
            .padding(.vertical, 2.0)
          
          Text(entry.title)
            .font(.headline)
            .fontWeight(.bold)
            .foregroundColor(Color.white)
            .multilineTextAlignment(.center)
          
          Text(entry.meaning)
            .font(.callout)
            .fontWeight(.light)
            .foregroundColor(Color.white)
            .multilineTextAlignment(.center)
            .lineLimit(3)
            .padding([.leading, .bottom, .trailing], 5.0)
            
        }
        .padding(.vertical, 10.0)
      }
      
    }
}

@main
struct ctrwidget: Widget {
    let kind: String = "ctrwidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: Provider()) { entry in
            ctrwidgetEntryView(entry: entry)
        }
        .configurationDisplayName("CTR Daily Widget")
        .description("You can get the quote of today.")
    }
}

struct ctrwidget_Previews: PreviewProvider {
    static var previews: some View {
      ctrwidgetEntryView(entry: SimpleEntry(date: Date(), title : "CHOOSE TO RE-EVALUATE", meaning: "And now, my beloved brethren, and also Jew, and all ye ends of the earth, hearken unto these words and believe in Christ; and if ye believe not in these words believe in Christ. And if ye shall believe in Christ ye will believe in these words, for they are the words of Christ, and he hath given them unto me; and they teach all men that they should do good."))
            .previewContext(WidgetPreviewContext(family: .systemSmall))
    }
}
