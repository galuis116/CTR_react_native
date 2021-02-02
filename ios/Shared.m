//
//  Shared.m
//  lds
//
//  Created by Ahmed Khatab on 14/12/2020.
//

#import "Shared.h"

@implementation Shared

static NSString *_recentWidgetAction = nil;

+ (NSString *)recentWidgetAction {
  return _recentWidgetAction;
}

+ (void)setRecentWidgetAction:(NSString *)recentWidgetAction {
  if (recentWidgetAction == nil) {
    _recentWidgetAction = nil;
  } else if (![recentWidgetAction isEqual:_recentWidgetAction]) {
    _recentWidgetAction = [recentWidgetAction copy];
  }
}

@end
