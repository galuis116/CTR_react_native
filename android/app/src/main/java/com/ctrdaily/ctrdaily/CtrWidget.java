package com.ctrdaily.ctrdaily;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.RemoteViews;
import android.content.SharedPreferences;
import org.json.JSONException;
import org.json.JSONObject;
/**
 * Implementation of App Widget functionality.
 */
public class CtrWidget extends AppWidgetProvider {

    public static String ACTION_CLICK_WIDGET = "action_click_widget";

    static void updateAppWidget(Context context, AppWidgetManager appWidgetManager, int appWidgetId) {
        try{
            SharedPreferences sharedPref = context.getSharedPreferences("DATA", Context.MODE_PRIVATE);
            String appString = sharedPref.getString("appData", "{\"title\":'', \"meaning\":''}");
            JSONObject appData = new JSONObject(appString);
            // Construct the RemoteViews object
            RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.ctr_widget);
            views.setTextViewText(R.id.widget_quote_title, appData.getString("title"));
            views.setTextViewText(R.id.widget_quote_meaning, appData.getString("meaning"));
            // Instruct the widget manager to update the widget
            Intent intent = new Intent(context, CtrWidget.class);
            intent.setAction(ACTION_CLICK_WIDGET);
            PendingIntent pendingIntent = PendingIntent.getBroadcast(context, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT);
            views.setOnClickPendingIntent(R.id.widgetContainer, pendingIntent);

            appWidgetManager.updateAppWidget(appWidgetId, views);
        }
        catch (JSONException e) {
            e.printStackTrace();
        }

    }

    @Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        // There may be multiple widgets active, so update all of them
        for (int appWidgetId : appWidgetIds) {
            updateAppWidget(context, appWidgetManager, appWidgetId);
        }
    }

    @Override
    public void onEnabled(Context context) {
        // Enter relevant functionality for when the first widget is created
    }

    @Override
    public void onDisabled(Context context) {
        // Enter relevant functionality for when the last widget is disabled
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        Intent mainActivityIntent = new Intent(context, MainActivity.class);
        mainActivityIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

        String action = intent.getAction();
        if (action.equals(ACTION_CLICK_WIDGET)) {
            context.startActivity(mainActivityIntent);
        } else {
            super.onReceive(context, intent);
        }
    }

}